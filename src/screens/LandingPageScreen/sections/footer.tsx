const Footer = () => {
    return (
        <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full mx-auto">
                <div className="flex justify-between gap-8">
                    {/* Logo and Description */}
                    <div className="col-span-1">
                        <div className="flex items-center space-x-2">
                            <img src="/i/odos Logo.svg" alt="Odos Logo" className="w-[128px]" />
                        </div>
                        <p className="mt-2 text-gray-600">The Optimal Order <br /> Routing Solution</p>
                    </div>

                    {/* Odos Links */}
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-4">Odos</h3>
                        <ul className="space-y-3">
                            <li><a href="/about" className="text-gray-600 hover:text-gray-900">About us</a></li>
                            <li><a href="/contact" className="text-gray-600 hover:text-gray-900">Contact us</a></li>
                        </ul>
                    </div>

                    {/* Solutions Links */}
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-4">Solutions</h3>
                        <ul className="space-y-3">
                            <li><a href="/dapp" className="text-gray-600 hover:text-gray-900">Launch dApp</a></li>
                            <li><a href="/loyalty" className="text-gray-600 hover:text-gray-900">Loyalty Program</a></li>
                        </ul>
                    </div>

                    {/* Developers Links */}
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-4">Developers</h3>
                        <ul className="space-y-3">
                            <li><a href="/api" className="text-gray-600 hover:text-gray-900">Odos APIs</a></li>
                            <li><a href="/developers" className="text-gray-600 hover:text-gray-900">Developers</a></li>
                        </ul>
                    </div>

                    <div className="flex space-x-4">
                        <a href="https://discord.gg/odos" className="text-gray-600 hover:text-gray-900">
                            <img src="/i/Discord.svg" alt="Discord" className="w-6 h-6" />
                        </a>
                        <a href="https://twitter.com/odos" className="text-gray-600 hover:text-gray-900">
                            <img src="/i/X.svg" alt="Twitter" className="w-6 h-6" />
                        </a>
                        <a href="https://t.me/odos" className="text-gray-600 hover:text-gray-900">
                            <img src="/i/Telegram.svg" alt="Telegram" className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 text-sm">©2025 Odos All Rights Reserved.</p>

                        <div className="flex items-center mt-4 md:mt-0">
                            {/* Legal Links */}
                            <div className="flex space-x-6 mr-8">
                                <a href="/privacy" className="text-gray-600 hover:text-gray-900 text-sm">
                                    Privacy Policy
                                </a>
                                <a href="/terms" className="text-gray-600 hover:text-gray-900 text-sm">
                                    Terms of Use
                                </a>
                                <a href="/cookies" className="text-gray-600 hover:text-gray-900 text-sm">
                                    Cookie Policy
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
