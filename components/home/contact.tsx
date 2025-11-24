import Image from "next/image"


function Contact() {
    return (
        <>
            <h1
                id="contact"
                className="text-center mt-20 text-white text-[60px] max-md:text-[1.8rem]"
            >
                Contact Me
            </h1>

            <div className="flex gap-8 justify-center items-center flex-wrap mt-8 mb-4">
                <div>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/molvop/"
                    >
                        <img
                            className="rounded-lg w-[50px] h-[50px]"
                            src="/linkedin.png"
                            alt="LinkedIn"
                        />
                    </a>
                </div>
                <div>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/molvOps"
                    >
                        <img
                            className="rounded-lg w-[50px] sm:w-[50px]"
                            src="/github-logo.png"
                            alt="GitHub"
                        />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Contact;

