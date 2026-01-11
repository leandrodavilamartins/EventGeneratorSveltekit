<script>
    let { children } = $props(); 
</script>


<div>
    <button type="button" class="btn preset-filled"><a href="/eventos/s2200/">Admissão (S-2200)</a></button>
    <button type="button" class="btn preset-filled"><a href="/eventos/s2220/">Periódico (S-2220)</a></button>
</div>

{@render children()}