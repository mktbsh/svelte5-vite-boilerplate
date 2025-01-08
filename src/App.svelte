<script lang="ts">
  let files = $state<FileList>();

  let fileList = $derived.by(() => Array.from(files || []));

  function clear() {
    files = new DataTransfer().files;
  }
</script>

<div class="w-screen h-screen overflow-hidden bg-gray-100 flex flex-col">
  <header class="w-full h-16 border-b border-gray-200"></header>
  <main class="flex-1">
    <div class="w-full min-h-0 h-full flex">
      <div class="w-80 h-full p-4 border-r border-gray-200">
        <input type="file" bind:files accept="image/png, image/jpeg" />
        <button onclick={clear}>Clear</button>
      </div>
      <div class="h-full p-4 overflow-y-auto">
        {#each fileList as file (file.name + file.size)}
          <p>{file.name}</p>
        {/each}
      </div>
    </div>
  </main>
  <footer class="w-full h-12 border-t border-gray-200">
    <div class="h-full text-gray-500 text-sm grid place-items-center">
      © {new Date().getFullYear()} mktbsh. All Rights Reserved.
    </div>
  </footer>
</div>
