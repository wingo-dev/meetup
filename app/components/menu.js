const { default: Link } = require("next/link");

const Menu = () => {
  return (
    <div>
      <Link href={"/"}>Home</Link>
      <Link href={"/news"}>News</Link>
    </div>
  );
};
export default Menu;
