
  const metaEl = document.getElementById("post-metadata");
  let posts = [];

  if (metaEl) {
    try {
      const raw = JSON.parse(metaEl.textContent);
      // Jika isinya array yang berisi satu string besar (escape JSON)
      if (Array.isArray(raw) && typeof raw[0] === "string") {
        posts = JSON.parse(raw[0]);
      } else if (Array.isArray(raw)) {
        posts = raw;
      } else {
        console.warn("Format metadata tidak dikenali:", raw);
      }
    } catch (err) {
      console.error("❌ Gagal parse metadata:", err);
    }
  }

  const getMetadata = (path) => posts.find(p => p.permalink === path);

  const popularContainer = document.getElementById("popular-news");
  const fallbackContent = document.getElementById("recommended-fallback");

  if (popularContainer) {
    fetch("https://weha.goatcounter.com/api/v0/stats")
      .then(res => {
        if (!res.ok) throw new Error("API gagal");
        return res.json();
      })
      .then(data => {
        const items = data?.stats?.paths;
        if (!items || !items.length) throw new Error("Data kosong");

        const filtered = items
          .filter(i => i.path.startsWith("/posts/"))
          .sort((a, b) => b.count - a.count)
          .slice(0, 3);

        let html = `
          <h2 class="text-xl uppercase font-medium border-b border-gray-300 dark:border-gray-800/50 pb-2 mb-4">
            Popular News
          </h2>
          <ul class="flex flex-col gap-4">`;

        filtered.forEach((item, i) => {
          const slug = item.path;
          const meta = getMetadata(slug);
          const title = meta?.title || slug.replace("/posts/", "").replace(/[-_/]/g, " ").replace(/\b\w/g, c => c.toUpperCase());
          const image = meta?.image || "/images/default.jpg";

          html += `
            <li class="relative flex flex-col w-full bg-gradient-to-br from-white dark:from-gray-900 via-gray-50 dark:via-gray-950 to-gray-300 dark:to-gray-950 overflow-hidden rounded-xl shadow-lg transition duration-300 ease-in-out">
              <a href="${slug}" class="w-full h-full">
                <img loading="lazy" src="${image}" alt="gambar ${title}" class="w-full h-[360px] object-cover rounded-t-xl brightness-75 hover:brightness-100 transition duration-300 ease-in-out">
              </a>
              <div class="group absolute bottom-0 left-0 w-[70%] h-[70%] rounded-tr-3xl flex flex-col gap-2 p-4 bg-gradient-to-br from-white dark:from-gray-900 via-gray-50 dark:via-gray-950 to-gray-300 dark:to-gray-950">
                <h2 class="text-2xl line-clamp-3 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
                  <a href="${slug}" class="hover:underline break-words">${title}</a>
                </h2>
                <p class="text-xl opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out"><span>—</span> Popular</p>
                <h2 class="absolute inset-0 text-transparent text-stroke-black dark:text-stroke-white text-5xl flex items-center justify-center font-black opacity-80 dark:opacity-20 group-hover:opacity-0 transition duration-500 ease-in-out">
                  #${i + 1}
                </h2>
              </div>
            </li>`;
        });

        html += `</ul>`;
        popularContainer.innerHTML = html;
      })
      .catch(err => {
        console.warn("❌ Gagal load data dari GoatCounter:", err);
        if (fallbackContent) {
          popularContainer.innerHTML = fallbackContent.innerHTML;
        }
      });
  } 