var express = require('express');
var router = express.Router();

const { createClient } = require('@supabase/supabase-js');
const WebSocket = require('ws');
const supabaseUrl = process.env.SUPABASE_URL?.replace(/\/rest\/v1\/?$/, '');
const supabaseKey = process.env.SUPABASE_KEY;

/* GET home page. */
router.get('/', async function(req, res) {
  const title = 'Barbería PP2';

  if (!supabaseUrl || !supabaseKey) {
    return res.render('index', {
      title,
      connectionOk: false,
      connectionMessage: 'Falta configurar SUPABASE_URL o SUPABASE_KEY en .env.',
      users: null,
      queryError: null
    });
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseKey, {
      realtime: { transport: WebSocket }
    });
    const { data, error } = await supabase.from('user').select('*').limit(10);

    if (error) {
      throw error;
    }

    res.render('index', {
      title,
      connectionOk: true,
      connectionMessage: 'Conexión correcta con Supabase.',
      users: data,
      queryError: null
    });
  } catch (error) {
    console.error('Error al consultar Supabase:', error);
    res.render('index', {
      title,
      connectionOk: false,
      connectionMessage: 'No se pudo completar la consulta a Supabase.',
      users: null,
      queryError: error.message
    });
  }
});

module.exports = router;
