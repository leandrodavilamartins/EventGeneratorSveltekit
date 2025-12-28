<script>
    import {Tabs} from '@skeletonlabs/skeleton-svelte'; 
</script>

<Tabs>
    <Tabs.List>
        <Tabs.Trigger value="Evento">Evento</Tabs.Trigger>
        <Tabs.Trigger value="Empregador">Empregador</Tabs.Trigger>
        <Tabs.Trigger value="Trabalhador">Trabalhador</Tabs.Trigger>
        <Tabs.Trigger value="Vínculo">Vínculo</Tabs.Trigger>
    </Tabs.List>
</Tabs>

<slot></slot>
