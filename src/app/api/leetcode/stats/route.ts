import { NextResponse } from 'next/server';

export interface LeetCodeData {
  username: string;
  totalSolved: number;
  totalSolvedStr: string;
  acSubmissionNum: Array<{
    difficulty: string;
    count: number;
    submissions: number;
  }>;
  ranking?: number | null;
}

async function fetchLeetCodeStats({ username }: { username: string }) {
  if (!username) {
    throw new Error('username is required');
  }

  const query = `query userProfile($username: String!) {\n  matchedUser(username: $username) {\n    username\n    submitStatsGlobal {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n    profile {\n      ranking\n    }\n  }\n}`;

  const res = await fetch('https://leetcode.com/graphql/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ query, variables: { username } }),
  });

  if (!res.ok) {
    throw new Error('Failed to fetch LeetCode profile');
  }

  const json = await res.json();
  const matched = json?.data?.matchedUser;

  if (!matched) {
    return null;
  }

  const ac = matched.submitStatsGlobal?.acSubmissionNum || [];
  const all = ac.find((a: any) => a.difficulty === 'All');
  const totalSolved = all ? all.count : ac.reduce((s: number, it: any) => s + (it.count || 0), 0);

  const data: LeetCodeData = {
    username: matched.username,
    totalSolved,
    totalSolvedStr: `${totalSolved}`,
    acSubmissionNum: ac,
    ranking: matched.profile?.ranking ?? null,
  };

  return data;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username') || process.env.NEXT_PUBLIC_LEETCODE_USERNAME || '';

    if (!username) {
      return NextResponse.json({ error: 'LeetCode username is required' }, { status: 400 });
    }

    const stats = await fetchLeetCodeStats({ username });

    if (!stats) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ stats });
  } catch (err) {
    console.error('Error fetching LeetCode stats', err);
    return NextResponse.json({ error: 'Failed to fetch LeetCode stats' }, { status: 500 });
  }
}
