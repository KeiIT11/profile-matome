import Link from 'next/link';

const HomeNavbar = () => {
  return (
    <div className="navbar px-10">
      <div className="flex-1">
        <Link href="/" className='btn btn-ghost normal-case text-xl'>
          Profile matome
        </Link>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/dashboard">
              編集画面
            </Link>
          </li>
          <li>
            <Link href="/login">
              新規登録
            </Link>
          </li>
        </ul>
        <Link href="/login" className='btn'>
          ログイン
        </Link>
      </div>
    </div>
  )
};
export default HomeNavbar;