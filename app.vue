<template>
  <main class="w-screen h-screen flex items-center justify-center bg-yellow font-figtree leading-[1.5] text-black font-medium">
    <article class="w-[327px] sm:w-[384px] border-[1px] border-black bg-white flex flex-col p-6 gap-6 rounded-[20px] shadow-card">
      <img class="h-[200px] w-full rounded-[10px] object-cover" src="/assets/images/illustration-article.svg" alt="Artistic illustration" />
      <section class="flex flex-col w-full gap-3">
        <article class="flex items-center justify-center bg-yellow rounded-[4px] w-fit px-3 py-1">
          <small class="font-extrabold">Learning</small>
        </article>
        <small>Published 21 Dec 2023</small>
        <h1 class="font-extrabold hover:text-yellow cursor-pointer">HTML & CSS foundations</h1>
        <p class="text-grey">These languages are the backbone of every website, defining structure, content, and presentation.</p>
      </section>  
      <figure class="flex flex-row gap-3 items-center">
        <img class="w-8 h-8" src="/assets/images/image-avatar.webp" alt="Author avatar" />
        <small class="font-extrabold">Greg Hooper</small>
      </figure>
    </article>
  </main>
</template>
