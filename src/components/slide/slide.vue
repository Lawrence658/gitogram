

<template>
    <div class="slide-card">
        <div class="slide-header">
            <Progress />
            <Avatar :username="'React.reposit'" width="32" height="32" />
        </div>
        <div class="slide-body">
            <picture class="pic">
                <img src="../../assets/img/png/slide-picture.png" alt="">
            </picture>
            <div class="description">
                <p>
                    <b>The easiest</b> way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.
                </p>
                <p>
                    For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.
                </p>
                <p>
                    In Preview 4 we enable push/pop navigation with NavigationPage. We added a concrete implementation of IWindow, and completed porting ContentPage from Xamarin.Forms
                </p>
                <p>
                    For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.
                </p>
                <p>
                    <b>The easiest</b> way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.
                </p>
                <p>
                    For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.
                </p>
                <p>
                    In Preview 4 we enable push/pop navigation with NavigationPage. We added a concrete implementation of IWindow, and completed porting ContentPage from Xamarin.Forms
                </p>
                <p>
                    For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.
                </p>
            </div>
        </div>
        <div class="slide-footer">
            <Button>Follow</Button>
        </div>
    </div>
</template>

<script>
import Progress from '@/components/progress/progress.vue'
import Avatar from '@/components/avatar/avatar.vue'
import Button from '@/components/button/button.vue'

export default {
    components: {
        Progress, Avatar, Button
    }
}
</script>

<style lang="scss" src="./slide.scss">

</style>