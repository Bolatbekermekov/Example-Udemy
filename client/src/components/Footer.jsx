import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
  BsTelegram,
} from "react-icons/bs";
export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Skill
              </span>
              Bridge
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="О нас" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.freecodecamp.org/news/javascript-projects-for-beginners/#how-to-create-tabs-for-a-portfolio-page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                   JS Проекты
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Skill Bridge
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Следуйте за нами" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/Bolatbekermekov"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href="https://discord.gg/q3eAneva"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Социальные сети" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.instagram.com/bolatbekermeko_v/?next=%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </Footer.Link>

                <Footer.Link
                  href="https://t.me/bolatbekermeko_v"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Skill Bridge"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/profile.php?id=61553412766966&locale=ru_RU"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://www.instagram.com/bolatbekermeko_v/?next=%2F"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="https://t.me/bolatbekermeko_v"
              icon={BsTelegram}
            />
            <Footer.Icon
              href="https://github.com/Bolatbekermekov"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
