
import { icons } from "../../utils/icons";
import PFPPlaceHolder from "../PFPPlaceHolder";
import { menuLinks } from "./config";
import { StyledLogo, StyledMenuList, StyledMenuListItem, StyledNavMenu } from "./styled";
import { Link, useLocation} from 'react-router-dom';

const NavMenu =()=> {
  const {pathname} = useLocation();

  return (
    <StyledNavMenu>
      <StyledMenuList>

        <StyledMenuListItem >
          <StyledLogo />
        </StyledMenuListItem>
        {menuLinks.primary.map(linkData=> {
          const isLinkActive = pathname === linkData.href;
          const Icon = icons[linkData.icon as keyof typeof icons]
          return (
            <StyledMenuListItem key={"menu_link_" + linkData.href} $isActive={isLinkActive}>
              <Link to={linkData.href}>
                <Icon size={24} />
              </Link>
            </StyledMenuListItem>
          )
        })}
      </StyledMenuList>

      <StyledMenuList>
        {menuLinks.user.map(linkData=> {
          const isLinkActive = pathname === linkData.href;
          const Icon = icons[linkData.icon as keyof typeof icons]
          return (
            <StyledMenuListItem key={"menu_link_" + linkData.href} $isActive={isLinkActive}>
              <Link to={linkData.href}>
                <Icon size={24} />
              </Link>
            </StyledMenuListItem>
          )
        })}
        <StyledMenuListItem >
          <PFPPlaceHolder fullName="Ali Khaled" size="s"/>
        </StyledMenuListItem>
      </StyledMenuList>
    </StyledNavMenu>
  );
}

export default NavMenu;