import { GradientText } from "./GradientText";
import { HeroAvatar } from "./HeroAvatar";
import { HeroSocial } from "./HeroSocial";
import { Section } from "./Section";


const Hero = () => (
    <Section>
        <HeroAvatar
            title={
                <>
                    Hi there, I'm <GradientText>John Chung</GradientText> 👋
                </>
            }
            description={
                <>
                    Very happy to see you there, I'm a developer believe in{' '}
                    <a className="text-cyan-400 hover:underline" href="/">
                        Peace & Love
                    </a> , welcome to contact me via twitter or email.
                    
                </>
            }
            avatar={
                <img
                    // className="h-80 w-64"
                    src='/assets/images/avatar.png'
                    alt="Avatar image"
                    loading="lazy"
                />
            }
            socialButtons={
                <>
                    <div className="flex flex-row gap-6 mt-3">
                        <a href="https://twitter.com/johnchung111" target='_blank'>
                            <HeroSocial
                                src="/assets/images/twitter-icon.png"
                                alt="Twitter icon"
                            />
                        </a>
                        <a href="mailto:duolingquan@gmail.com" target='_blank'>
                            <HeroSocial
                                src="/assets/images/email-icon.png"
                                alt="email icon"
                            />
                        </a>
                    </div>

                </>
            }
        />
    </Section>
);

export { Hero };
