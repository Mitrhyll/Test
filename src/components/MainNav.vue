<template>
    <nav class="navbar navbar-expand navbar-light fixed-top">
        <div class="container">
            <a href="/" class="navbar-brand">Home</a>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a href="login" class="nav-link">Login</a>
                    </li>
                    <li class="nav-item">
                        <a href="register" class="nav-link">sign up</a>
                    </li>
                    <li>
                        <button @click.prevent="logout()" type="submit" class="btn btn-danger">Log out</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'MainNav'
}
</script>