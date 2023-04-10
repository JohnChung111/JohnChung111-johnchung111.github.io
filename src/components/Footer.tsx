
import { AppConfig } from "../utils/AppConfig";
import { FooterCopyright } from "./FooterCopyright";
import { Section } from "./Section";

const Footer = () => (
  <Section>
    <FooterCopyright site_name={AppConfig.site_name} />
  </Section>
);

export { Footer };
