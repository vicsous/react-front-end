const Settings = () => {
    return (
            <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header className="mb-4 lg:mb-6 not-format">
                            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">Settings</h1>
                        </header>

                        <section className="bg-white dark:bg-gray-900">
                            <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
                                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Personal Data</h2>
                                <form action="#">
                                    <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">

                                        <div className="sm:col-span-2">
                                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Picture</label>
                                            <img className="w-20 h-20 rounded-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Rounded avatar"></img>
                                            <div>
                                                
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
                                                <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"></input>
                                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>

                                            </div>
                                        </div>

                                        <div className="sm:col-span-2">
                                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                            <div className="flex">
                                                <span className="font-italic text-lg inline-flex items-center px-3 text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                                    @
                                                </span>
                                                <input type="text" name="username" id="username" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john02"></input>
									        </div>

                                        </div>
                                        <div className="sm:col-span-2">
                                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Display Name</label>
                                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value="Apple iMac 27&ldquo;" placeholder="Type product name" required="">
                                            </input>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bio</label>
                                            <textarea id="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write a product description here...">Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US</textarea>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <button type="submit" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                            Update
                                        </button>
                                    </div>
                                </form>
                                <hr></hr>
                                
                                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Email Address</h2>
                                <form>
                                    <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                                        
                                    </div>
                                    <div className="flex items-center space-x-4">
                                            <button type="submit" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                                Update
                                            </button>
                                    </div>
                                </form>
                                <hr></hr>
                                
                                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Password</h2>
                                <form>
                                    <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                                        
                                    </div>
                                    <div className="flex items-center space-x-4">
                                            <button type="submit" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                                Update
                                            </button>
                                    </div>
                                </form>
                                <hr></hr>
                            </div>
                            </section>


                        <p>Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way,
                            you can think things through before committing to an actual design project.</p>
                        <p>But then I found a <a href="https://flowbite.com">component library based on Tailwind CSS called
                                Flowbite</a>. It comes with the most commonly used UI components, such as buttons, navigation
                            bars, cards, form elements, and more which are conveniently built with the utility classes from
                            Tailwind CSS.</p>
                        <h2>Getting started with Flowbite</h2>
                        <p>First of all you need to understand how Flowbite works. This library is not another framework.
                            Rather, it is a set of components based on Tailwind CSS that you can just copy-paste from the
                            documentation.</p>
                        <p>It also includes a JavaScript file that enables interactive components, such as modals, dropdowns,
                            and datepickers which you can optionally include into your project via CDN or NPM.</p>
                        <p>You can check out the <a href="https://flowbite.com/docs/getting-started/quickstart/">quickstart
                                guide</a> to explore the elements by including the CDN files into your project. But if you want
                            to build a project with Flowbite I recommend you to follow the build tools steps so that you can
                            purge and minify the generated CSS.</p>
                        <p>You'll also receive a lot of useful application UI, marketing UI, and e-commerce pages that can help
                            you get started with your projects even faster. You can check out this <a
                                href="https://flowbite.com/docs/components/tables/">comparison table</a> to better understand
                            the differences between the open-source and pro version of Flowbite.</p>
                        <h2>When does design come in handy?</h2>
                        <p>While it might seem like extra work at a first glance, here are some key moments in which prototyping
                            will come in handy:</p>
                        <ol>
                            <li><strong>Usability testing</strong>. Does your user know how to exit out of screens? Can they
                                follow your intended user journey and buy something from the site you’ve designed? By running a
                                usability test, you’ll be able to see how users will interact with your design once it’s live;
                            </li>
                            <li><strong>Involving stakeholders</strong>. Need to check if your GDPR consent boxes are displaying
                                properly? Pass your prototype to your data protection team and they can test it for real;</li>
                            <li><strong>Impressing a client</strong>. Prototypes can help explain or even sell your idea by
                                providing your client with a hands-on experience;</li>
                            <li><strong>Communicating your vision</strong>. By using an interactive medium to preview and test
                                design elements, designers and developers can understand each other — and the project — better.
                            </li>
                        </ol>
                        <h3>Laying the groundwork for best design</h3>
                        <p>Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way,
                            you can think things through before committing to an actual design project.</p>
                        <p>Let's start by including the CSS file inside the <code>head</code> tag of your HTML.</p>
                        <h3>Understanding typography</h3>
                        <h4>Type properties</h4>
                        <p>A typeface is a collection of letters. While each letter is unique, certain shapes are shared across
                            letters. A typeface represents shared patterns across a collection of letters.</p>
                        <h4>Baseline</h4>
                        <p>A typeface is a collection of letters. While each letter is unique, certain shapes are shared across
                            letters. A typeface represents shared patterns across a collection of letters.</p>
                        <h4>Measurement from the baseline</h4>
                        <p>A typeface is a collection of letters. While each letter is unique, certain shapes are shared across
                            letters. A typeface represents shared patterns across a collection of letters.</p>
                        <h3>Type classification</h3>
                        <h4>Serif</h4>
                        <p>A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter.
                            Typefaces with serifs are called serif typefaces. Serif fonts are classified as one of the
                            following:</p>
                        <h4>Old-Style serifs</h4>
                        <ul>
                            <li>Low contrast between thick and thin strokes</li>
                            <li>Diagonal stress in the strokes</li>
                            <li>Slanted serifs on lower-case ascenders</li>
                        </ul><img src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-2.png" alt=""></img>
                        <ol>
                            <li>Low contrast between thick and thin strokes</li>
                            <li>Diagonal stress in the strokes</li>
                            <li>Slanted serifs on lower-case ascenders</li>
                        </ol>
                        <h3>Laying the best for successful prototyping</h3>
                        <p>A serif is a small shape or projection that appears at the beginning:</p>
                        <blockquote>
                            <p>Flowbite is just awesome. It contains tons of predesigned components and pages starting from
                                login screen to complex dashboard. Perfect choice for your next SaaS application.</p>
                        </blockquote>
                        <h4>Code example</h4>
                        <p>A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter.
                            Typefaces with serifs are called serif typefaces. Serif fonts are classified as one of the
                            following:</p>
                        <pre><code className="language-html">&lt;dl className="grid grid-cols-2 gap-8 max-w-screen-md text-gray-900 sm:grid-cols-3 dark:text-white"&gt;
                        &lt;div className="flex flex-col justify-center items-center"&gt;
                        &lt;dt className="mb-2 text-3xl font-extrabold"&gt;73M+&lt;/dt&gt;
                        &lt;dd className="text-lg font-normal text-gray-500 dark:text-gray-400"&gt;developers&lt;/dd&gt;
                        &lt;/div&gt;
                        &lt;div className="flex flex-col justify-center items-center"&gt;
                        &lt;dt className="mb-2 text-3xl font-extrabold"&gt;1B+&lt;/dt&gt;
                        &lt;dd className="text-lg font-normal text-gray-500 dark:text-gray-400"&gt;contributors&lt;/dd&gt;
                        &lt;/div&gt;
                        &lt;div className="flex flex-col justify-center items-center"&gt;
                        &lt;dt className="mb-2 text-3xl font-extrabold"&gt;4M+&lt;/dt&gt;
                        &lt;dd className="text-lg font-normal text-gray-500 dark:text-gray-400"&gt;organizations&lt;/dd&gt;
                        &lt;/div&gt;
                        &lt;/dl&gt;
                        </code></pre>
                        <h4>Table example</h4>
                        <p>A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter.
                        </p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Country</th>
                                    <th>Date &amp; Time</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>United States</td>
                                    <td>April 21, 2021</td>
                                    <td><strong>$2,300</strong></td>
                                </tr>
                                <tr>
                                    <td>Canada</td>
                                    <td>May 31, 2021</td>
                                    <td><strong>$300</strong></td>
                                </tr>
                                <tr>
                                    <td>United Kingdom</td>
                                    <td>June 3, 2021</td>
                                    <td><strong>$2,500</strong></td>
                                </tr>
                                <tr>
                                    <td>Australia</td>
                                    <td>June 23, 2021</td>
                                    <td><strong>$3,543</strong></td>
                                </tr>
                                <tr>
                                    <td>Germany</td>
                                    <td>July 6, 2021</td>
                                    <td><strong>$99</strong></td>
                                </tr>
                                <tr>
                                    <td>France</td>
                                    <td>August 23, 2021</td>
                                    <td><strong>$2,540</strong></td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>Best practices for setting up your prototype</h3>
                        <p><strong>Low fidelity or high fidelity?</strong> Fidelity refers to how close a prototype will be to
                            the real deal. If you’re simply preparing a quick visual aid for a presentation, a low-fidelity
                            prototype — like a wireframe with placeholder images and some basic text — would be more than
                            enough. But if you’re going for more intricate usability testing, a high-fidelity prototype — with
                            on-brand colors, fonts and imagery — could help get more pointed results.</p>
                        <p><strong>Consider your user</strong>. To create an intuitive user flow, try to think as your user
                            would when interacting with your product. While you can fine-tune this during beta testing,
                            considering your user’s needs and habits early on will save you time by setting you on the right
                            path.</p>
                        <p><strong>Start from the inside out</strong>. A nice way to both organize your tasks and create more
                            user-friendly prototypes is by building your prototypes ‘inside out’. Start by focusing on what will
                            be important to your user, like a Buy now button or an image gallery, and list each element by order
                            of priority. This way, you’ll be able to create a prototype that puts your users’ needs at the heart
                            of your design.</p>
                        <p>And there you have it! Everything you need to design and share prototypes — right in Flowbite Figma.
                        </p>
                    </article>
                </div>
            </main>
    )
}

export default Settings