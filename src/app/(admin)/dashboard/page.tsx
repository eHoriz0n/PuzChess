import { getAuthUser } from "@/server/db/data/users/user";
import { options } from "../../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

import { redirect } from "next/navigation";
import Stats from "@/components/ui/stats";
import Link from "next/link";
import BlogForm from "@/components/layout/blogForm";

export default async function Dashboard() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/auth/signin?callbackUrl=/dashboard");
  }
  if (session) {
    const authUser = await getAuthUser(session.user?.email as string);
    if (authUser?.role !== "ADMIN") {
      redirect("/denied");
    }
  }

  return (
    <section className="flex flex-wrap gap-16 pt-[8rem] w-full items-center justify-center pb-[12rem] md:ps-4 md:pe-16 ">
      {/* more stuff later */}
      <div className="w-full max-w-[24rem] mt-4 flex flex-col  items-center lg:items-start ">
        <Stats />
        <Link
          href={"/dashboard/blogs"}
          className="text-clrSecondaryGrey text-smallFnt underline mt-6 ms-2"
        >
          Check blogs
        </Link>
      </div>

      <div className="w-full max-w-[36rem]   ">
        <h2 className="md:text-largeFnt text-[2.3rem]  font-boldFnt text-center lg:text-left mb-10">
          Add blog
        </h2>
        <BlogForm />
      </div>
    </section>
  );
}
