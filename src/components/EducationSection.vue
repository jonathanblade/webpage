<template>
    <section id="education">
        <h3>Образование</h3><hr>
        <ul class="list-unstyled">
            <li v-for="item in data">
                <EducationItem :item="item"/>
            </li>
        </ul>
    </section>
</template>

<script>
import EducationItem from '@/components/EducationItem.vue'
import educationData from '@/assets/education.json';

export default {
    name: 'Education',
    components: { 
      EducationItem 
    },
    data() {
        return {
            data: educationData
        };
    }
};
</script>
