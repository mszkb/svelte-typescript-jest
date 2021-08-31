<script>
    // your script goes here
    let buttonText = 'Button'

  function handleClick() {
    buttonText = 'Button Clicked'
  }
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->
<p>oida</p>
<button on:click="{handleClick}">{buttonText}</button>
