<script>
    import {Tabs} from '@skeletonlabs/skeleton-svelte'; 
</script>

<Tabs>
    <Tabs.List>
        <Tabs.Trigger value="Evento"><a href="/gerador/xmlAssembler">Emitir Evento</a></Tabs.Trigger>
        <Tabs.Trigger value="Empregador">Cadastrar Empregador</Tabs.Trigger>
        <Tabs.Trigger value="Trabalhador"><a href="/gerador/cadastro">Cadastrar Trabalhador</a></Tabs.Trigger>
    </Tabs.List>
</Tabs>

<slot></slot>
