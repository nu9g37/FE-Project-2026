import Link from "next/link"

export default function TopMenuItem ( { title, pageRef } : { title:string, pageRef:string } ) {
  return (
    <Link href={pageRef} className="w-fit px-8
      text-center my-auto text-lg text-white font-bold hover:text-gray-500"
    >
      {title}
    </Link>
  );
}