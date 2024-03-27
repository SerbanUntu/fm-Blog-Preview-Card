<template>
  <div class="w-screen h-screen flex items-center justify-center bg-yellow font-figtree text-base text-black font-semibold">
    <div class="w-[384px] border-[1px] border-black bg-white flex flex-col p-6 gap-6 rounded-[20px] shadow-card">
      <img class="h-[200px] rounded-[10px]" src="/assets/images/illustration-article.svg" alt="Artistic illustration" />
      <div class="flex flex-col w-full gap-3">
        <div class="flex items-center justify-center bg-yellow rounded-[4px] w-fit px-3 py-1">
          <p class="font-extrabold text-small">Learning</p>
        </div>
        <p class="text-small">Published 21 Dec 2023</p>
        <h1 class="font-extrabold text-heading hover:text-yellow cursor-pointer">HTML & CSS foundations</h1>
        <p class="text-grey">These languages are the backbone of every website, defining structure, content, and presentation.</p>
      </div>
      <div class="flex flex-row gap-3 items-center">
        <img class="w-8 h-8" src="/assets/images/image-avatar.webp" alt="Author avatar" />
        <p class="text-small font-extrabold">Greg Hooper</p>
      </div>
    </div>
  </div>
</template>
