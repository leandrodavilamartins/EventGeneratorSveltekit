<script>

    let { children } = $props(); 
    import { Tabs } from '@skeletonlabs/skeleton-svelte'; 

</script>

<Tabs>
    <Tabs.List>
        <Tabs.Trigger value="Evento"><a href="/eventos/s2220/original">Original</a></Tabs.Trigger>
        <Tabs.Trigger value="Empregador"><a href="/eventos/s2220/retif/">Retificação</a></Tabs.Trigger>
		<button type="button" class="btn preset-filled">Sair</button>
    </Tabs.List>
</Tabs>
{@render children()}