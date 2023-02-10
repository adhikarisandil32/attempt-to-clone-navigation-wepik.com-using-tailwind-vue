<template>
    <main class="mt-12">
        <!-- text section -->
        <div class="w-11/12 mx-auto flex flex-col text-center">
            <p class="text-2xl font-semibold text-gray-700">
                Learn how to build and
                <span class="font-bold text-blue-500">
                    improve your business
                </span>
            </p>
            <p class="mt-4 text-gray-600 text-xl">
                Shhh! Let's keep it secret and make your business thrive with tips from our blog
            </p>
        </div>

        <!-- Cards Section -->
        <div class="sm:flex sm:justify-center sm:gap-x-8">
            <!-- Card 1 -->
            <article class="h-[475px] mt-6 w-11/12 sm:w-1/4 sm:mx-px mx-auto border border-gray-400 rounded-lg overflow-hidden">
                <section class="pb-4">
                    <aside class="rounded-t-lg">
                        <img src="../assets/card-01.avif" alt="Valentine's Day Card"
                            class="custom-transform-scale cursor-pointer">
                    </aside>

                    <aside class="px-4 mt-4">
                        <div class="flex justify-between text-xs font-extrabold">
                            <p class="text-blue-600">MARKETING</p>
                            <p class="text-gray-500">6 days ago</p>
                        </div>
                        <div class="mt-2 font-bold text-gray-700">
                            <p>7 Valentine’s Day marketing ideas to attract costumers in 2023</p>
                        </div>
                        <div class="mt-2 text-gray-500">
                            <p>
                                The sweet smell of love is in the air, and it’s time for small businesses to start
                                brainstorming Valentine’s Day campaign ideas that will win customers’ hearts (and
                                wallets)!
                                According to the NRF, more than half of consumers intend to celebrate this day and even
                                those...
                            </p>
                        </div>
                    </aside>
                </section>
            </article>

            <!-- Card 2 -->
            <article class="h-[475px] mt-6 w-11/12 sm:w-1/4 sm:mx-px mx-auto border border-gray-400 rounded-lg overflow-hidden">
                <section class="pb-4">
                    <aside class="rounded-t-lg ">
                        <img src="../assets/card-02.avif" alt="Valentine's Day Card"
                            class="custom-transform-scale cursor-pointer">
                    </aside>

                    <aside class="px-4 mt-4">
                        <div class="flex justify-between text-xs font-extrabold">
                            <p class="text-blue-600">MARKETING</p>
                            <p class="text-gray-500">1 week ago</p>
                        </div>
                        <div class="mt-2 font-bold text-gray-700">
                            <p>+15 TOP AI tools everyone can use</p>
                        </div>
                        <div class="mt-2 text-gray-500">
                            <p>
                                Ready to bring your business into the Artificial Intelligence age? Having a hard time
                                knowing where to start, or what tools you need? Don’t worry, our blog post has got all
                                the
                                answers! Entering the world of AI can be daunting, but with these top +15 picks for
                                awesome
                                AI...
                            </p>
                        </div>
                    </aside>
                </section>
            </article>

            <!-- Card 3 -->
            <article class="h-[475px]  mt-6 w-11/12 sm:w-1/4 sm:mx-px mx-auto border border-gray-400 rounded-lg overflow-hidden">
                <section class="pb-4">
                    <aside class="rounded-t-lg ">
                        <img src="../assets/card-03.avif" alt="Valentine's Day Card"
                            class="custom-transform-scale cursor-pointer">
                    </aside>

                    <aside class="px-4 mt-4">
                        <div class="flex justify-between text-xs font-extrabold">
                            <p class="text-blue-600">DESIGN</p>
                            <p class="text-gray-500">2 weeks ago</p>
                        </div>
                        <div class="mt-2 font-bold text-gray-700">
                            <p>Print design — tips on all you need to know</p>
                        </div>
                        <div class="mt-2 text-gray-500">
                            From business cards to posters and flyers, print design plays an integral role in any small
                            business seeking success. But what do you really need to know? Relax – we’ve got the low
                            down!
                            Read up on our top tips for brilliant printing projects that will have your brand...
                        </div>
                    </aside>
                </section>
            </article>
        </div>
    </main>

    <!-- Visit out blog button -->
    <div class="w-40 mt-8 bg-blue-600 rounded-md mx-auto cursor-pointer hover:bg-blue-700">
        <span class="py-4 block text-center text-white font-bold">
            Visit our blog
        </span>
    </div>
</template>

<script setup>
/* eslint-disable */

</script>
    
<style scoped>
.custom-transform-scale {
    transition: transform 0.1s linear;
}

.custom-transform-scale:hover {
    transform: scale(1.05);
}
</style>