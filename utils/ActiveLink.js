import { useRouter } from "next/router";
import Link from "next/link";
import React, { Children } from "react";
import { useMixpanel } from "../components/Common/mixpanel";
import ReactGA from "react-ga";

const ActiveLink = ({ children, ...props }) => {
  const child = Children.only(children);
  const router = useRouter();
  const mixpanel = useMixpanel();

  let className = child.props.className || "";
  if (router.pathname === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
    mixpanel.track("Nav click", { href: props.href });
    ReactGA.pageview(props.href);
  }
  delete props.activeClassName;

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};

export default ActiveLink;
