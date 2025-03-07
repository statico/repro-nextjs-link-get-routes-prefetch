import Link from "next/link";

export default function Page() {
  return (
    <div>
      <p>repro-nextjs-link-get-routes-prefetch</p>
      <ul>
        <li>
          <Link href="test?param=foo">Foo</Link>
        </li>
        <li>
          <Link href="test?param=bar">Bar</Link>
        </li>
        <li>
          <Link href="test?param=baz">Baz</Link>
        </li>
      </ul>
    </div>
  );
}
