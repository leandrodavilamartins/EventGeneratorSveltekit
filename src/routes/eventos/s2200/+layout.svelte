<script>

    let { children } = $props(); 
    import { Tabs } from '@skeletonlabs/skeleton-svelte'; 

</script>

<Tabs>
    <Tabs.List>
        <Tabs.Trigger value="Evento"><a href="/eventos/s2200/original">Original</a></Tabs.Trigger>
        <Tabs.Trigger value="Empregador"><a href="/eventos/s2200/retif/">Retificação</a></Tabs.Trigger>
		<button type="button" class="btn preset-filled" onclick={deslogar}><a href="/">Sair</a></button>
    </Tabs.List>
</Tabs>
{@render children()}