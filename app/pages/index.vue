<template>
    <div>
        Redirecting...
    </div>
</template>

<script setup lang="ts">
const router = useRouter()
onMounted(() => {
    router.push('/dashboard')
})
</script>
