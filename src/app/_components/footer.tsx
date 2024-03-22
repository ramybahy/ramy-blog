import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-2 flex flex-col lg:flex-row items-center">
          <p className="text-xs font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            © 2024
          </p>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
          
            <a
              href={`https://github.com/ramybahy/ramy-blog`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
