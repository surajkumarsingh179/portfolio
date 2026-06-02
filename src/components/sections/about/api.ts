export async function fetchGitHubStats(username: string) {
  const response = await fetch(`/api/github/stats?username=${username}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error);
  }

  return data.stats;
}

export async function fetchWakaTimeStats(username: string) {
  // This function now returns LeetCode stats (re-using the wakatime callsite)
  const response = await fetch(`/api/leetcode/stats?username=${username}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error);
  }

  return data.stats;
}
