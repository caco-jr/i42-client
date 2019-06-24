export const post_id = ({ post_id }: { post_id: string }) => ({
  as: `/p/${post_id}`,
  href: `/post/_id?post_id=${post_id}`
})
