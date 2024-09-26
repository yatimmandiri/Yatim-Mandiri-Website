export const GetDataNews = async (params) => {
  const searchParams = new URLSearchParams(params);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/news/posts?${searchParams}`,
    // { next: { revalidate: 120 } }
    { cache: 'no-store' }
  );

  const data = await response.json();

  return {
    data: data,
    total: response.headers.get('X-WP-Total'),
  };
};

export const GetDataBlogs = async (params) => {
  const searchParams = new URLSearchParams(params);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/blog/posts?${searchParams}`,
    // { next: { revalidate: 120 } }
    { cache: 'no-store' }
  );

  const data = await response.json();

  return {
    data: data,
    total: response.headers.get('X-WP-Total'),
  };
};
