import { useId } from "react";
import styles from "./features.module.css";
import useLocalesMap from "./use-locales-map";
import { featuresMap, titleMap } from "../translations/text";

import MailIcon from "./icons/mail";
import DiscordIcon from "./icons/discord";
import FAQIcon from "./icons/faq";
import YouTubeIcon from "./icons/youtube";

export function Feature({ text, icon, url }) {
  return (
    <div className={styles.feature}>
      {icon}
      <h4><a href={url}>{text}</a></h4>
    </div>
  );
}

/** @type {{ key: string; icon: React.FC; url: string}[]} */
const FEATURES_LIST = [
    { key: "mail", icon: <MailIcon />, url: "mailto:nerd@n3rd3x3.dev" },
    { key: "discord", icon: <DiscordIcon />, url: "https://discord.com/invite/ntts" },
    { key: "yt", icon: <YouTubeIcon />, url: "https://www.youtube.com/notexttospeech" },
    { key: "faq", icon: <FAQIcon />, url: "faq" },
];

export default function Features() {
  const keyId = useId();
  const title = useLocalesMap(titleMap);
  const features = useLocalesMap(featuresMap);

  return (
    <div className="mx-auto max-w-full w-[880px] text-center px-4 mb-10">
      <p className="text-lg mb-2 text-gray-600 md:!text-2xl">{title}</p>
      <div className={styles.features}>
        {FEATURES_LIST.map(({ key, icon, url }) => (
          <Feature text={features[key]} icon={icon} key={keyId + key} url={url} />
        ))}
      </div>
    </div>
  );
}
