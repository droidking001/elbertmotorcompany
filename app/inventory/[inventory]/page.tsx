import { getProject } from "@/sanity/sanity-utils";
type Props = {
  params: { inventory: string };
};
export default async function project({ params }: Props) {
  const slug = params.inventory;
  const project = await getProject(slug);

  return (
    <div>
      {project.make}
      <br></br>
      {project.model}
    </div>
  );
}
