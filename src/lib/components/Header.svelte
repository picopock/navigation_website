<script lang="ts">
  import { get } from 'svelte/store';
  import { onDestroy } from 'svelte';
  import { isIntranetStore } from '$lib/store/isIntranet';
  import { siteName } from '$lib/constants/siteInfo';
  import { avatarURL } from '$lib/constants/avatar';
  import { intranet, extranet } from '$lib/constants/isIntranet';

  let isIntranet = get(isIntranetStore);

  const unsubscribe = isIntranetStore.subscribe((data) => {
    isIntranet = data;
  });

  const handleInternalSwitch = () => {
    isIntranetStore.update((isIntranet) => !isIntranet);
  };

  onDestroy(() => {
    unsubscribe();
  });
</script>

<header class="header">
  <a href="/" class="header-logo">
    <img src={avatarURL} alt={siteName} />
    <span class="name">{siteName}</span>
  </a>
  <div class={`tag ${isIntranet ? 'internal' : 'external'}`} on:click={handleInternalSwitch}>
    {isIntranet ? intranet : extranet}
  </div>
</header>

<style lang="scss">
  .header {
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;

    &-logo {
      flex: 1;
      display: flex;
      align-items: center;
      padding: 12px 24px;
      text-decoration: none;
      outline: none;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }

      .name {
        flex-shrink: 0;
        margin-left: 14px;
        font-size: 20px;
        color: var(--text-color);

        &:hover {
          color: var(--text-hover-color);
        }
      }
    }

    .tag {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 64px;
      height: 32px;
      margin-right: 24px;
      color: var(--text-color);
      border-radius: 4px;
      cursor: pointer;
      user-select: none;

      &.internal {
        background-color: #99b6f1;
      }

      &.external {
        background-color: #ff3a19;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .header {
      &-logo {
        padding: 12px 14px;

        img {
          width: 36px;
          height: 36px;
        }

        .name {
          font-size: 18px;
        }
      }
      .tag {
        width: 40px;
        height: 24px;
        font-size: 12px;
        margin-right: 14px;
      }
    }
  }
</style>
