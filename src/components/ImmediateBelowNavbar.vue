<template>
    <main class="bg-gradient-to-b from-blue-50 to-white flex items-center">
        <section class="flex flex-col-reverse sm:flex-row sm:justify-evenly justify-start sm:items-center w-full pt-8">
            <aside class="sm:h-full h-fit text-center sm:text-left">
                <div class="textColor-blue mt-12">
                    <span class="font-bold text-4xl">Design made easy<br>
                        for your business</span>
                </div>
                <p class="mx-auto mt-4 leading-1.5 font-semibold w-96 text-gray-700">
                    Discover and try out our collection of templates, easy to use and fully customizable to make them perfect for your small business.
                </p>
                <div class="mt-8">
                    <div class="w-96 mx-auto p-2 rounded border-2 border-gray-200 hover:border-gray-300 outline-none flex">
                        <input type="text" placeholder="Search your template here" class="h-full w-full p-3 outline-none">
                        <button class="px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg border border-blue-600"><font-awesome-icon icon="fa-solid fa-magnifying-glass"/></button>
                    </div>
                </div>
                <div class="mt-2">
                    <span class="text-[0.8rem]">
                        Examples:
                        <a href="#" class="font-bold text-blue-700">Coffee Shop Poster</a>,
                        <a href="#" class="font-bold text-blue-700">Beauty Salon Brochure</a>,
                        <a href="#" class="font-bold text-blue-700">Party Flyer</a>
                    </span>
                </div>
            </aside>
            <aside class="flex sm:block justify-center">
                <img src="../assets/meeting.jpeg" class="rounded-lg sm:h-80 sm:w-auto w-3/4">
            </aside>
        </section>
    </main>
    <div>
        <section class="h-[125px] sm:w-full sm:mt-0 mt-4 p-4 text-center text-gray-700">
            <p class="font-semibold sn:text-3xl text-2xl">Start creating <span class="font-bold text-blue-500">amazing designs</span></p>
            <p class="mt-4 font-semibold">Use our online editing tool to make outstanding creations. Get the perfect result in just a few clicks!</p>
        </section>
    </div>
</template>

<script setup>

</script>

<style scoped>
    @media screen and (min-width: 640px){
        main{
            height: calc(745px - 96px - 125px); /*524px*/
        }
    }
    .textColor-blue{
        color: #113255;
    }
</style>