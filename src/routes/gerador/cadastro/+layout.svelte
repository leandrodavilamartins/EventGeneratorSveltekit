<script>
    let estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']
    let dependentes = ''; 
</script>

<div class="container">
    <input class="input" placeholder="Nome do Trabalhador" />
    <input class="input" placeholder="CPF" />
    <select class="select">
        <option disabled selected>Sexo</option>
        <option value="M">M</option>
        <option value="F">F</option>
    </select>
    <input class="date" placeholder="Data de Nascimento" />
    <select class="select">
        <option disabled selected>País de Nascimento</option>
        <option>Brasil</option>
        <option>Exterior</option>
    </select>
    <select class="select">
        <option disabled selected>Estado Civil</option>
        <option value="1">1 - Solteiro</option>
        <option value="2">2 - Casado</option>
        <option value="3">3 - Divorciado</option>
        <option value="4">4 - Separado</option>
        <option value="5">5 - Viúvo</option>
    </select>
    <select class="select">
        <option disabled selected>Etnia/Raça</option>
        <option value="1">1 - Branca</option>
        <option value="2">2 - Preta</option>
        <option value="3">3 - Parda</option>
        <option value="4">4 - Amarela</option>
        <option value="5">5 - Indígena</option>
        <option value="6">6 - Não informado</option>
    </select>
    <select class="select">
        <option disabled selected>Grau de Instrução do Trabalhador</option>
        <option value="01">01 - Analfabeto, inclusive o que, embora tenha recebido instrução, não se alfabetizou</option>
        <option value="02">02 - Até o 5º ano incompleto do ensino fundamental (antiga 4ª série) ou que se tenha alfabetizado sem ter frequentado escola regular</option>
        <option value="03">03 - 5º ano completo do ensino fundamental</option>
        <option value="04">04 - Do 6º ao 9º ano do ensino fundamental incompleto (antiga 5ª a 8ª série)</option>
        <option value="05">05 - Ensino fundamental completo</option>
        <option value="06">06 - Ensino médio incompleto</option>
        <option value="07">07 - Ensino médio completo</option>
        <option value="08">08 - Educação superior incompleta</option>
        <option value="09">09 - Educação superior completa</option>
        <option value="10">10 - Pós-graduação completa</option>
        <option value="11">11 - Mestrado completo</option>
        <option value="12">12 - Doutorado completo</option>
    </select>
    <select class="select">
        <option disabled selected>Tipo de Logradouro</option>
    	<option value="R">Rua</option>
    	<option value="AV">Avenida</option>
    	<option value="PC">Praça</option>
    	<option value="ROD">Rodovia</option>
    	<option value="EST">Estrada</option>
    	<option value="FAZ">Fazenda</option>
    	<option value="GJA">Granja</option>
    	<option value="SIT">Sítio</option>
    	<option value="VL">Vila</option>
    </select>
    <input type="text" placeholder="Descrição do Logradouro" class="input" />
    <input type="text" placeholder="Número do Logradouro" class="input" defaultValue="S/N" />
    <input type="text" placeholder="Complemento" class="input" />
    <input type="text" placeholder="Bairro" class="input" />
    <input type="text" placeholder="CEP" class="input" />
    <input type="text" placeholder="Código do Município" class="input" /> <!-- Consultar código do município na tabela do IBGE -->
    <select class="select">
        <option disabled selected>Unidade Federativa</option>
    	{#each estados as estado}
    	<option value={estado}>{estado}</option>
    	{/each}
    </select>
    <input type="text" placeholder="Telefone" class="input" />
    <input type="email" placeholder="E-mail" class="validator input" />
    <select class="select">
        <option disabled selected>Deficiência física</option>
        <option value="S">S - Sim</option>
        <option value="N">N - Não</option>
    </select>
    <select class="select">
        <option disabled selected>Deficiência visual</option>
        <option value="S">S - Sim</option>
        <option value="N">N - Não</option>
    </select>
    <select class="select">
        <option disabled selected>Deficiência auditiva</option>
        <option value="S">S - Sim</option>
        <option value="N">N - Não</option>
    </select>
    <select class="select">
        <option disabled selected>Deficiência mental</option>
        <option value="S">S - Sim</option>
        <option value="N">N - Não</option>
    </select>
    <select class="select">
        <option disabled selected>Deficiência intelectual</option>
        <option value="S">S - Sim</option>
        <option value="N">N - Não</option>
    </select>
    <select class="select">
        <option disabled selected>Trabalhador reabilitado ou readaptado ?</option>
        <option value="S">S - Sim</option>
        <option value="N">N - Não</option>
    </select>
    <select class="select">
        <option disabled selected>Cota para deficientes ou beneficiário reabilitado ? </option>
        <option value="S">S - Sim</option>
        <option value="N">N - Não</option>
    </select>
    <fieldset class="fieldset">
        <legend class="fieldset-legend">Possui dependentes ?</legend>
        <select class="select" bind:value={dependentes}>
           <option disabled selected> Dependentes ?</option>
           <option value="S">S - Sim</option>
           <option value="N">N - Não</option>
        </select>
    </fieldset>
    {#if dependentes == "S"}
    <button class="btn">Adicionar dependente</button>
    {/if}
</div>