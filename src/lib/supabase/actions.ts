import { createClient } from "@/lib/supabase/client";

// 고정 user_id — 비공개 사이트, 본인만 사용
const USER_ID = "b18e8cbe-a644-4ef5-b7f0-b2969cbbe8ba";

export interface ActivityLogRow {
  id: string;
  action: string;
  detail: string;
  section: string;
  related_id: string | null;
  user_id: string;
  created_at: string;
}

// --------------- Activity Log ---------------

export async function logActivity(
  action: string,
  detail: string,
  section: string,
  relatedId?: string
) {
  const supabase = createClient();
  await supabase.from("activity_log" as never).insert({
    user_id: USER_ID,
    action,
    detail,
    section,
    related_id: relatedId ?? null,
  } as never);
}

export async function getActivityLog(days: number = 30) {
  const supabase = createClient();
  const since = new Date();
  since.setDate(since.getDate() - days);

  const { data } = (await supabase
    .from("activity_log" as never)
    .select("*")
    .gte("created_at" as never, since.toISOString() as never)
    .order("created_at" as never, { ascending: false } as never)) as {
    data: ActivityLogRow[] | null;
  };

  return data ?? [];
}

export async function getDailyStats(days: number = 30) {
  const logs = await getActivityLog(days);

  const map = new Map<string, { count: number; sections: Set<string> }>();

  for (const log of logs) {
    const date = log.created_at.slice(0, 10);
    if (!map.has(date)) {
      map.set(date, { count: 0, sections: new Set() });
    }
    const entry = map.get(date)!;
    entry.count++;
    if (log.section) entry.sections.add(log.section);
  }

  return Array.from(map.entries())
    .map(([date, { count, sections }]) => ({
      date,
      count,
      sections: Array.from(sections),
    }))
    .sort((a, b) => a.date.localeCompare(b.date));
}

// --------------- Fragments ---------------

export async function saveFragment(
  content: string,
  tags: string[],
  type: string = "text"
) {
  const supabase = createClient();
  const { data, error } = (await supabase
    .from("fragments" as never)
    .insert({
      content,
      tags,
      type,
      user_id: USER_ID,
    } as never)
    .select()
    .single()) as { data: { id: string } | null; error: unknown };

  if (!error && data) {
    await logActivity("create", content.slice(0, 80), "fragments", data.id);
  }

  return data;
}

export async function getFragments() {
  const supabase = createClient();
  const { data } = await supabase
    .from("fragments" as never)
    .select("*")
    .order("created_at" as never, { ascending: false } as never);

  return (data ?? []) as Record<string, unknown>[];
}

// --------------- Scratch ---------------

export async function saveScratch(content: string) {
  const supabase = createClient();
  const { data, error } = (await supabase
    .from("scratch" as never)
    .insert({
      content,
      user_id: USER_ID,
    } as never)
    .select()
    .single()) as { data: { id: string } | null; error: unknown };

  if (!error && data) {
    await logActivity("create", content.slice(0, 80), "scratch", data.id);
  }

  return data;
}

export async function getScratchItems() {
  const supabase = createClient();
  const { data } = await supabase
    .from("scratch" as never)
    .select("*")
    .order("created_at" as never, { ascending: false } as never);

  return (data ?? []) as Record<string, unknown>[];
}

export async function deleteScratch(id: string) {
  const supabase = createClient();
  await supabase
    .from("scratch" as never)
    .delete()
    .eq("id" as never, id as never);

  await logActivity("delete", "메모 삭제", "scratch", id);
}

// --------------- Brainstorm ---------------

export async function saveBrainstorm(question: string, answer: string, category: string) {
  const supabase = createClient();
  const { data, error } = (await supabase
    .from("brainstorm_history" as never)
    .insert({
      question,
      answer,
      category,
      user_id: USER_ID,
    } as never)
    .select()
    .single()) as { data: { id: string; question: string; answer: string; created_at: string } | null; error: unknown };

  if (!error && data) {
    await logActivity("brainstorm", answer.slice(0, 80), "brainstorm", data.id);
  }

  return data;
}

export async function getBrainstormHistory() {
  const supabase = createClient();
  const { data } = (await supabase
    .from("brainstorm_history" as never)
    .select("*")
    .order("created_at" as never, { ascending: false } as never)
    .limit(50)) as { data: { id: string; question: string; answer: string; created_at: string }[] | null };

  return data ?? [];
}
