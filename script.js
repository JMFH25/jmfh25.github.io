function Updatecost()
{
  // document.getElementById('total1').value=4;
  var sum = 0;
  var cpu = document.getElementsByName('CPU');
  var fan = document.getElementsByName('CPU Fan');
  var  = document.getElementsByName('CPU Fan');

  for (i=0;i<cpu.length;i++)
  {
    if (cpu[i].checked)
    {
      sum = sum + parseFloat(cpu[i].value);
    }
  }

  for(i=0; i<fan.length; i++)
  {
    if(fan[i].checked)
    {
      sum = sum+parseFloat(fan[i].value)
    }
  }
    document.getElementById('total1').value=sum;
}
