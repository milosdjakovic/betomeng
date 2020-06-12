<template>
  <a
    class="flex items-center my-3 hover:text-blue-300 hover:underline"
    :href="to"
  >
    <slot />

    <span class="ml-2">{{ label }}</span>
  </a>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'link label'
    },
    to: {
      type: String,
      default: '#'
    }
  }
}
</script>
