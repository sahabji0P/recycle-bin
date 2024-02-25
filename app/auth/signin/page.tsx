export default function SignInPage() {

    return (
        <div className="flex h-screen flex-col items-center justify-center py-2 ">
            <main className=" flex h-screen w-full flex-1 flex-col items-center justify-center bg-base-200 px-8 text-center">
                <div className="mt-28 flex w-full max-w-4xl flex-col rounded-2xl shadow-2xl md:mt-16 md:w-2/3 md:flex-row ">
                    <div className="w-full rounded-t-2xl bg-base-content/10 p-5 md:w-3/5 md:rounded-l-2xl md:rounded-r-none">
                        <div className="text-left font-bold">
                            <span className="mr-1 font-bold text-primary">Sign</span>UP
                        </div>

                        <div className="py-10">
                            <span className="mb text-3xl font-bold text-primary">
                                Recycle</span> <h2 className="mb text-3xl font-bold">Bin</h2>


                            <div className="mb-2 inline-block w-12 border-2 border-primary"></div>

                            <div className="flex flex-col items-center rounded">
                                <div className="mb-3 flex w-64 items-center rounded-3xl bg-gray-600 p-2 ">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="flex-1 bg-transparent text-sm outline-none"
                                    />
                                </div>

                                <div className="mb-3 flex w-64 items-center rounded-3xl bg-gray-600 p-2">

                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        className="flex-1 bg-transparent text-sm outline-none"
                                    />
                                </div>

                                <div className="mb-5 flex w-64 justify-between">
                                    <label className="flex items-center text-xs">
                                        <input type="checkbox" name="remember" className="mr-1" />
                                        Remember me
                                    </label>
                                    <a href="#" className="text-xs">
                                        Forgot Password?
                                    </a>
                                </div>
                                <a href="#" className="btn btn-outline btn-primary btn-wide">
                                    Sign In
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*sign in section*/}

                    <div className="mb-24 w-full rounded-b-2xl bg-base-100 px-12 py-36 md:mb-0 md:w-2/5 md:rounded-bl-none md:rounded-br-2xl md:rounded-tr-2xl">
                        <h2 className="mb-2 text-2xl font-bold">Greetings!</h2>
                        <div className="mb-2 inline-block w-12 border-2 border-white"></div>
                        <p className="mb-10 text-primary">Tell us about yourself!</p>
                        <p className="mb-10">
                            Reduce, Reuse, and Recycle with{" "}
                            <span className="text-primary">Recycle Bin</span>.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}