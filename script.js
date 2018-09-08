function Updatecost()
{
  // document.getElementById('total1').value=4;
  var sum = 0;
  var cpu = document.getElementsByName('CPU');
  var fan = document.getElementsByName('CPU Fan');
  var moth = document.getElementsByName('Motherboard');
  var compcase = document.getElementsByName('Case');
  var gpu = document.getElementsByName('GPU');

  for (var i=0;i<cpu.length;i++)
  {
    if (cpu[i].checked)
    {
      sum = sum + parseFloat(cpu[i].value);
    }
  }

  for(var i=0; i<fan.length; i++)
  {
    if(fan[i].checked)
    {
      sum = sum+parseFloat(fan[i].value)
    }
  }

  for(var i=0; i<moth.length; i++)
  {
    if(moth[i].checked)
    {
      sum = sum+parseFloat(moth[i].value)
    }
  }

  for(var i=0; i<compcase.length; i++)
  {
    if(compcase[i].checked)
    {
      sum = sum+parseFloat(compcase[i].value)
    }
  }

  for(var i=0; i<gpu.length; i++)
  {
    if(gpu[i].checked)
    {
      sum = sum+parseFloat(gpu[i].value)
    }
  }
    document.getElementById('total1').value=sum;
}
