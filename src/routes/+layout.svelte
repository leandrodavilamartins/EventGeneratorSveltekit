<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { app } from '$lib/firebaseApp'; 
	import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"; 
	import { Tabs } from '@skeletonlabs/skeleton-svelte'; 

	const auth = getAuth(app); 
	let email = $state(''); 
	let password = $state(''); 
	let loginForm = $state(true); 
	let isAuthenticated = $state(false);  

	async function authenticate() {

		signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user; 
			isAuthenticated = true; 
			loginForm = false; 
		})
		.catch((error) => {
			const errorCode = error.code; 
			const errorMessage = error.message; 
		}); 
	}

	async function deslogar() {
		signOut(auth).then(() => {
			console.log("Logout"); 
			isAuthenticated = false; 
			loginForm = true; 
		}).catch((error) => {
			console.log("Ocorreu um erro"); 
		}); 
		
	}

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div>MENU</div>
{#if loginForm}
<div>
	<form>
		<fieldset>
			<label class="label">
				<span class="label-text">E-mail</span>
				<input class="input" type="text" bind:value={email}/>
			</label>
		</fieldset>
		<fieldset>
			<label class="label">
				<span class="label-text">Senha</span>
				<input class="input" type="text" bind:value={password}/>
			</label>
		</fieldset>
		<button type="button" class="btn preset-filled" onclick={authenticate}>Login</button>
	</form>
</div>
{/if}

{#if isAuthenticated}
<Tabs>
    <Tabs.List>
        <Tabs.Trigger value="Evento"><a href="/eventos/">Emitir Evento</a></Tabs.Trigger>
        <Tabs.Trigger value="Empregador"><a href="/cadastro/empregador/">Cadastrar Empregador</a></Tabs.Trigger>
        <Tabs.Trigger value="Trabalhador"><a href="/cadastro/trabalhador/">Cadastrar Trabalhador</a></Tabs.Trigger>
		<button type="button" class="btn preset-filled" onclick={deslogar}><a href="/">Sair</a></button>
    </Tabs.List>
</Tabs>

{@render children()}
{/if}
