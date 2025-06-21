// ====== LOADING SCREEN ======
const MIN_LOADING_TIME = 9000;
const loading = document.querySelector('#loading-screen');
const header = document.querySelector('header');
const footer = document.querySelector('footer'); 
const menuMain = document.querySelector('#main-menu');
const main = document.querySelector('main');
const gooey = document.getElementById('#gooey');

const showMainContent = () => {
  if (loading) {
    loading.classList.remove('opacity-100');
    loading.classList.add('opacity-0');

    setTimeout(() => {
      loading.classList.add('hidden'); 
    loading.classList.remove('flex');
    loading.remove();
    gooey.remove();
    console.log('✅ Loading Animation dihidden')
    }, 1000);
  }

  header?.classList.remove('hidden');
  header?.classList.add('flex');

  footer?.classList.remove('hidden');
  footer?.classList.add('flex');

  main?.classList.remove('hidden');

  menuMain?.classList.remove('hidden');
  menuMain?.classList.add('flex');
};

if (sessionStorage.getItem('loadingShown') === 'true') {
  showMainContent();
  console.log('✅ LoadingShown bernilai "true"')
} else {
  const startTime = performance.now();

  window.addEventListener('load', () => {
    const elapsed = performance.now() - startTime;
    const remainingTime = Math.max(0, MIN_LOADING_TIME - elapsed);

    setTimeout(() => {
      sessionStorage.setItem('loadingShown', 'true');
      showMainContent();
      console.log('✅ Save sessionStorage')
    }, remainingTime);
  });
}
