const RAPID_API_KEY = process.env.NEXT_PUBLIC_RAPID_API_KEY;
const RAPID_API_HOST = process.env.NEXT_PUBLIC_RAPID_API_HOST;

export async function fetchJobs(query: string = '', location: string = '') {
  const url = `https://active-jobs-db.p.rapidapi.com/active-ats-7d?title_filter=%22Data%20Engineer%22&location_filter=%22United%20States%22`;

  const response = await fetch(url, {
    headers: {
      'X-RapidAPI-Key': RAPID_API_KEY!,
      'X-RapidAPI-Host': RAPID_API_HOST!,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch jobs');
  }

  return response.json();
}