type INavMenuItemProps = {
    href: string;
    children: string;
  };
  
  const NavMenuItem = (props: INavMenuItemProps) => (
    <li className="hover:text-white text-slate-400 ml-6">
      <a href={props.href} >{props.children}</a>
    </li>
  );
  
  export { NavMenuItem };