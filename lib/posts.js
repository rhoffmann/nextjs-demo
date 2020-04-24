import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsPath = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  const filenames = fs.readdirSync(postsPath);
  const allPostsData = filenames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsPath, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allPostsData.sort((a, b) => {
    a.date < b.date ? 1 : -1;
  });
}
