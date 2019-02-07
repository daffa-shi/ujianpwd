<template>
  <div >
    Ini Komponen User <br>
    <user name="Muhammad Daffa Shidiq"></user>
  </div>
</template>

<script>
import User from '@/components/User'
export default{
  name: 'Component1',
  components: {
    User
  }
}
</script>
