 window.onload = (function(){

   devicesConnected.value = 55
   devicesProblem.value = 4
   devicesOff.value = 12
   devicesAttention.value = 2

   let somaDevices = devicesConnected.value + devicesAttention.value + devicesOff.value + devicesProblem.value
   
   totalDevices.innerHTML = `${somaDevices}`
 })

 