<template>
    <header class="w-full bg-white px-5 flex justify-between flex-row h-24 sticky top-0">
        <div class="w-[150px] sm:w-1/5 flex items-center ">
            <a href="#" class="w-full block py-8">
                <img class="h-[40px] object-left object-cover" src="../assets/logo-wepik.svg">
            </a>
        </div>
        <nav class="hidden sm:w-3/5 sm:block">
            <ul class="flex font-semibold text-slate-700 flex-row justify-center items-center h-full">
                <li class="relative group">
                    <a class="navigation" href="#">Templates <font-awesome-icon icon="fa-solid fa-chevron-down" /></a>
                    <div class="pl-3 w-[350px] absolute top-3/4 left-4 bg-white shadow-lg shadow-gray-400 py-3 hidden group-hover:block">
                        <div class="flex font-normal">
                          <ul class="w-1/2">
                            <li><a href="#" class="block p-2 hover:text-blue-700 text-sm">Logos</a></li>
                            <li><a href="#" class="block p-2 hover:text-blue-700 text-sm">Posters</a></li>
                            <li><a href="#" class="block p-2 hover:text-blue-700 text-sm">Instagram Stories</a></li>
                            <li><a href="#" class="block p-2 hover:text-blue-700 text-sm">Flyers</a></li>
                          </ul>
                          <ul class="w-1/2">
                            <li><a href="#" class="block p-2 hover:text-blue-700 text-sm">Business Cards</a></li>
                            <li><a href="#" class="block p-2 hover:text-blue-700 text-sm">Menus</a></li>
                            <li><a href="#" class="block p-2 hover:text-blue-700 text-sm">Brouchers</a></li>
                            <li><a href="#" class="block p-2 hover:text-blue-700 text-sm">Price List</a></li>
                          </ul>
                        </div>
                        <div class="px-2 w-[250px]">
                          <a href="#" class="block rounded-md border border-blue-800 bg-blue-700 px-4 py-2 font-semibold text-white hover:bg-blue-800">See More Templates</a>
                        </div>
                    </div>
                </li>
                <li class="relative group">
                    <a class="navigation" href="#">Create <font-awesome-icon icon="fa-solid fa-chevron-down" /></a>
                    <div class="pl-3 w-[350px] absolute top-3/4 left-4 bg-white shadow-lg shadow-gray-400 py-3 hidden group-hover:block">
                        <div class="flex font-normal">
                            <ul class="w-1/2">
                            <li>
                                <a href="#" class="block p-2 hover:text-blue-700 text-sm">Instagram Stroies Maker</a>
                            </li>
                            <li>
                                <a href="#" class="block p-2 hover:text-blue-700 text-sm">Instagram Posts Maker</a>
                            </li>
                            <li>
                                <a href="#" class="block p-2 hover:text-blue-700 text-sm">Logos Maker</a>
                            </li>
                            <li>
                                <a href="#" class="block p-2 hover:text-blue-700 text-sm">Menus Maker</a>
                            </li>
                            </ul>
                            <ul class="w-1/2">
                            <li>
                                <a href="#" class="block p-2 hover:text-blue-700 text-sm">Posters Cards</a>
                            </li>
                            <li>
                                <a href="#" class="block p-2 hover:text-blue-700 text-sm">Business Cards Maker</a>
                            </li>
                            <li>
                                <a href="#" class="block p-2 hover:text-blue-700 text-sm">Flyer Maker</a>
                            </li>
                            <li>
                                <a href="#" class="block p-2 hover:text-blue-700 text-sm">Brouchers Maker</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="group relative">
                    <a class="navigation" href="#">Features <font-awesome-icon icon="fa-solid fa-chevron-down" /></a>
                    <div class="pl-3 w-[200px] absolute top-3/4 left-4 bg-white shadow-lg shadow-gray-400 py-3 hidden group-hover:block">
                        <div class="flex font-normal">
                          <ul>
                            <li>
                              <a href="" class="block p-2 hover:text-blue-700 text-sm">Photo Editor</a>
                            </li>
                            <li>
                              <a href="" class="block p-2 hover:text-blue-700 text-sm">AI Generator</a>
                            </li>
                            <li>
                              <a href="" class="block p-2 hover:text-blue-700 text-sm">Brand Kit</a>
                            </li>
                            <li>
                              <a href="" class="block p-2 hover:text-blue-700 text-sm">Background Remover</a>
                            </li>
                            <li>
                              <a href="" class="block p-2 hover:text-blue-700 text-sm">Mobile Apps</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                </li>
                <li>
                    <a class="navigation" href="#">My Brand</a>
                </li>
                <li>
                    <a class="navigation" href="#">Blog</a>
                </li>
                <li>
                    <a class="navigation" href="#">Support Center</a>
                </li>
            </ul>
        </nav>
        <div class="w-[200px] sm:w-1/5 flex justify-end items-center font-bold ">
            <div class="text-gray-600 cursor-pointer p-2.5 relative" @click="displayLanguage = !displayLanguage">
                <span class="block hover:text-blue-700"><font-awesome-icon icon="fa-solid fa-globe" /> EN <font-awesome-icon icon="fa-solid fa-chevron-down" /></span>
                <div class="pl-3 w-[150px] absolute top-full left-0 bg-white shadow-lg shadow-gray-400 py-3" v-if="displayLanguage">
                    <div class="flex font-semibold">
                      <ul class="w-full">
                        <li>
                          <a href="#" class="block p-2 hover:text-blue-700 text-gray-600 text-sm">English</a>
                        </li>
                        <li>
                          <a href="#" class="block p-2 hover:text-blue-700 text-gray-600 text-sm">Español</a>
                        </li>
                      </ul>
                    </div>
                  </div>
            </div>
            <div class="rounded border-2 border-blue-700 py-2.5 text-blue-700 hover:bg-blue-700 hover:text-white">
                <a href="#" class="p-4 font-bold"><font-awesome-icon icon="fa-regular fa-user"/> <span class="hidden sm:inline">Log In</span></a>
            </div>
            <div class="ml-3 sm:hidden">
                <a href="#" class="text-blue-700 py-2.5 px-3 text-xl rounded border-2 border-gray-400">
                    <font-awesome-icon icon="fa-solid fa-bars" />
                </a>
            </div>
        </div>
    </header>
</template>

<script setup>
    /*eslint-disable*/
    import {ref} from 'vue'

    let displayLanguage = ref(false)
</script>

<style>
    .navigation{
        @apply block h-full py-8 px-4 hover:text-blue-700;
    }
</style>